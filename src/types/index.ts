// Roles available in the system
export type UserRole = "admin" | "driver" | "passenger";

// User account status for admin verification
export type AccountStatus = "pending" | "approved" | "rejected";

// User Account Data (Driver & Passenger)
export interface UserProfile {
  id: string; // Automatically generated unique ID
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  status: AccountStatus; // Admin approval state
  isSubscribed: boolean;

  // Passenger Documents
  idDocumentUrl?: string; // Uploaded ID image URL

  // Driver-Only Vehicle & License Information
  driverDetails?: {
    driverLicenseUrl: string; // Uploaded Driver License image URL
    carLicenseUrl: string; // Uploaded Car License image URL
    vehicle: {
      make: string; // e.g., Toyota, Opel
      model: string; // e.g., Corolla, Astra
      plateNumber: string; // e.g., ABC 123
    };
  };
}

// Ride / Trip Data (Created by Drivers or Requested by Passengers)
export interface RideTrip {
  id: string; // Automatically generated unique Ride ID
  userId: string; // Creator's User ID
  role: "driver" | "passenger";

  // Route & Schedule details
  fromLocation: string; // Starting point
  toLocation: string; // Destination
  departureDate: string; // e.g., "2026-09-01"
  departureTime: string; // e.g., "08:30 AM"

  status: "active" | "completed" | "cancelled";
}
