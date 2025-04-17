/**
 * Payment status enum
 */
export enum PaymentStatus {
	PENDING = 'PENDING',
	COMPLETED = 'COMPLETED',
	FAILED = 'FAILED',
	REFUNDED = 'REFUNDED'
}

/**
 * Payment method enum
 */
export enum PaymentMethod {
	CREDIT_CARD = 'CREDIT_CARD',
	DEBIT_CARD = 'DEBIT_CARD',
	CASH = 'CASH',
	MOBILE_PAYMENT = 'MOBILE_PAYMENT'
}

/**
 * Payment interface
 */
export interface Payment {
	id: string;
	amount: number;
	status: PaymentStatus;
	method: PaymentMethod;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * Create payment DTO
 */
export interface CreatePaymentDto {
	amount: number;
	method: PaymentMethod;
	orderId: string;
}

/**
 * Update payment status DTO
 */
export interface UpdatePaymentStatusDto {
	status: PaymentStatus;
}

/**
 * Payment response
 */
export interface PaymentResponse {
	success: boolean;
	payment?: Payment;
	error?: string;
}

/**
 * Credit card payment details
 */
export interface CreditCardPaymentDetails {
	cardNumber: string;
	cardholderName: string;
	expirationMonth: number;
	expirationYear: number;
	cvv: string;
}

/**
 * Mobile payment details
 */
export interface MobilePaymentDetails {
	provider: string;
	phoneNumber: string;
	transactionId: string;
}

/**
 * Payment summary for dashboard
 */
export interface PaymentSummary {
	totalPayments: number;
	completedPayments: number;
	failedPayments: number;
	refundedPayments: number;
	totalRevenue: number;
}
