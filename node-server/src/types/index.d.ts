/* eslint-disable no-var */

import { Document, Types } from 'mongoose';
import winston from 'winston';
import { USER_TYPES } from '../config/const';
import { IMerchant, IMerchantMethods } from './integration';
import { IUser } from './users';

export { APIError } from './server-error';

declare global {
	var logger: winston.Logger;
	var __basedir: string;
	var __augmont_auth_token: string;

	namespace Express {
		interface Request {
			locals: Locals;
		}
		interface Response {
			locals: Locals;
		}
	}
}
export interface Locals {
	role: USER_TYPES;
	user_id: Types.ObjectId;
	user: Document<unknown, any, IUser> & IUser & { _id: Types.ObjectId };
	auth_token: string;
	refresh_token: string;

	merchant: Document<unknown, any, IMerchant> &
		IMerchant & {
			_id: Types.ObjectId;
		} & IMerchantMethods;
}

export { default as ServerError, APIError } from './server-error';
