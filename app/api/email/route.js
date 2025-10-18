import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";

import EmailModel from "@/lib/models/EmailModel";

const loadDB = async () => {
  await connectDB();
};

loadDB();

export async function GET(request) {
    const data = await EmailModel.find({})

    return NextResponse.json({success : true, data : data})
}

export async function POST(request) {
    try {

        const formData = await request.formData();
        const email = formData.get('email')
        
        const emailData = {
            email : email
        }
        
        await EmailModel.create(emailData)
        
        return NextResponse.json({success : true, msg : "Email Subscribed...", email : email})
    }catch (err) {
        return NextResponse.json({sucess : false, msg : "Error Subscribing Email..."})
    }
}

export async function DELETE(request) {

    try {

        const {searchParams} = new URL(request.url)
        
        const id = searchParams.get("id")
        
        await EmailModel.findByIdAndDelete(id)

        return NextResponse.json({success : true, msg : "Email Deleted..."})
    }catch (err) {
        return NextResponse.json({success : false})
    }
}