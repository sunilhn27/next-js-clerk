export { };

// Create a type for the roles
export type Roles = "admin" | "basic" | "Premium" | "standard" | "enterprise";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles
        };
    }
}