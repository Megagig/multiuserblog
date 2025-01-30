import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import User from '@/models/user.models';
import bcryptjs from 'bcryptjs';

export async function POST(req) {
  await dbConnect();
  const { name, email, password } = await req.json();

  try {
    const user = await new User({
      name,
      email,
      password: await bcryptjs.hash(password, 10),
    }).save();

    return NextResponse.json({ success: 'User created successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 422 });
  }
}
