import { format, formatDistance, formatRelative, isToday, isYesterday, parseISO } from 'date-fns';

/**
 * Format a date to a standard date format (e.g., "Apr 12, 2023")
 */
export function formatDate(date: Date | string): string {
	const dateObj = typeof date === 'string' ? parseISO(date) : date;
	return format(dateObj, 'MMM d, yyyy');
}

/**
 * Format a date to a standard date and time format (e.g., "Apr 12, 2023 14:30")
 */
export function formatDateTime(date: Date | string): string {
	const dateObj = typeof date === 'string' ? parseISO(date) : date;
	return format(dateObj, 'MMM d, yyyy HH:mm');
}

/**
 * Format a date to a relative time (e.g., "5 minutes ago", "2 days ago")
 */
export function formatRelativeTime(date: Date | string): string {
	const dateObj = typeof date === 'string' ? parseISO(date) : date;
	return formatDistance(dateObj, new Date(), { addSuffix: true });
}

/**
 * Format a date to a smart format:
 * - Today: "Today at 14:30"
 * - Yesterday: "Yesterday at 14:30"
 * - This week: "Monday at 14:30"
 * - Older: "Apr 12, 2023"
 */
export function formatSmartDate(date: Date | string): string {
	const dateObj = typeof date === 'string' ? parseISO(date) : date;

	if (isToday(dateObj)) {
		return `Today at ${format(dateObj, 'HH:mm')}`;
	}

	if (isYesterday(dateObj)) {
		return `Yesterday at ${format(dateObj, 'HH:mm')}`;
	}

	// If it's within the last 7 days, show the day name
	const now = new Date();
	const diffTime = Math.abs(now.getTime() - dateObj.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays <= 7) {
		return formatRelative(dateObj, now);
	}

	return formatDate(dateObj);
}

/**
 * Format a time duration in milliseconds to a human-readable format (e.g., "5m 30s")
 */
export function formatDuration(milliseconds: number): string {
	const seconds = Math.floor((milliseconds / 1000) % 60);
	const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
	const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
	const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

	const parts = [];

	if (days > 0) {
		parts.push(`${days}d`);
	}

	if (hours > 0) {
		parts.push(`${hours}h`);
	}

	if (minutes > 0) {
		parts.push(`${minutes}m`);
	}

	if (seconds > 0 || parts.length === 0) {
		parts.push(`${seconds}s`);
	}

	return parts.join(' ');
}
