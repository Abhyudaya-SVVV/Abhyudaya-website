import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/config/dbConfig";
import ContactSubmission from "@/models/ContactSubmission";

dbConnect();

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message } = await req.json();
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        message: "Name, email, and message are required fields",
        status: 400,
      });
    }

    const newContactSubmission = new ContactSubmission({
      name,
      email,
      message,
    });

    await newContactSubmission.save();

    return NextResponse.json({
      message: "Contact submission successful",
      success: true,
      status: 201,
      data: newContactSubmission,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
      status: 500,
    });
  }
}