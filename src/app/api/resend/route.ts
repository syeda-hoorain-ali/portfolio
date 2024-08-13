import { Resend } from 'resend';
import ContactEmail from '@/emails/Contact';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: 'jagjets133@gmail.com',
      subject: 'Message from your portfolio',
      react: ContactEmail({ firstName, lastName, email, message }),
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.message
      }, { status: 403 })
    }
    
    return NextResponse.json({
      success: true,
      message: "Email send successfully",
      id: data?.id
    }, { status: 200 })


  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error
    }, { status: 500 })
  }
}