import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSubscriberSchema, insertVolunteerApplicationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
      
      const existing = await storage.getNewsletterSubscriberByEmail(validatedData.email);
      if (existing) {
        return res.status(400).json({ 
          message: "This email is already subscribed to our newsletter." 
        });
      }
      
      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      res.status(201).json({ 
        message: "Successfully subscribed to the newsletter!",
        subscriber 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid email address.",
          errors: error.errors 
        });
      }
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ message: "Failed to subscribe. Please try again." });
    }
  });

  app.post("/api/volunteer/apply", async (req, res) => {
    try {
      const validatedData = insertVolunteerApplicationSchema.parse(req.body);
      
      const application = await storage.createVolunteerApplication(validatedData);
      res.status(201).json({ 
        message: "Your volunteer application has been received! We'll be in touch soon.",
        application 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Please fill in all required fields.",
          errors: error.errors 
        });
      }
      console.error("Volunteer application error:", error);
      res.status(500).json({ message: "Failed to submit application. Please try again." });
    }
  });

  return httpServer;
}
