/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//import {onRequest} from 'firebase-functions/v2/https';
//import * as logger from 'firebase-functions/logger';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as cors from 'cors';
import * as admin from 'firebase-admin';
import { newUserEmailTrigger } from './newUserAlertEmail';
//import * as nodemailer from 'nodemailer';
//import * as puppeteer from 'puppeteer';
//import * as pdfkit from 'pdfkit';

admin.initializeApp({
  credential: admin.credential.cert('service account info here'),
});

const app = express();

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

exports.newUserEmail = newUserEmailTrigger;

exports.app = functions
  .runWith({
    memory: '1GB',
    timeoutSeconds: 120,
  })
  .https.onRequest(app);
