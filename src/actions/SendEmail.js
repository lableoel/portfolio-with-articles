"use server"

import React from "react"
import {Resend} from "resend"
import ContactFormEmail from "@/email/ContactFormEmail"

const resend = new Resend(process.env.RESEND_API_KEY)