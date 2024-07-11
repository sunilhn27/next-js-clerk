export { };

// Create a type for the roles
export type Roles = "admin" | "basic" | "premium" | "standard" | "enterprise";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles
        };
    }
}