/**
 * Order status enum
 */
export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  PREPARING = 'PREPARING',
  READY = 'READY',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

/**
 * Order item interface
 */
export interface OrderItem {
  id: string;
  productId: string;
  productName?: string;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Order interface
 */
export interface Order {
  id: string;
  status: OrderStatus;
  userId: string;
  userName?: string;
  items: OrderItem[];
  total: number;
  paymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Create order DTO
 */
export interface CreateOrderDto {
  userId: string;
  items: {
    productId: string;
    quantity: number;
  }[];
}

/**
 * Update order status DTO
 */
export interface UpdateOrderStatusDto {
  status: OrderStatus;
}

/**
 * Order summary for dashboard
 */
export interface OrderSummary {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  cancelledOrders: number;
  totalRevenue: number;
}