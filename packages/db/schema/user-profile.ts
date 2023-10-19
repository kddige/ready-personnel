import { mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { nanoid } from "nanoid";

export const userProfileRoleEnum = mysqlEnum("user_profile_role_enum", [
  "OWNER",
  "OPERATOR",
  "USER",
]);

export const userProfileSchema = mysqlTable("user_profile", {
  id: varchar("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid(21)),

  firstName: varchar("first_name", { length: 256 }).notNull(),
  lastName: varchar("last_name", { length: 256 }).notNull(),

  orgId: varchar("org_id", { length: 256 }).notNull(),
  orgRole: userProfileRoleEnum.default("USER").notNull(),
});

export type UserProfileSchemaSelect = typeof userProfileSchema.$inferSelect;
export type UserProfileSchemaInsert = typeof userProfileSchema.$inferInsert;

export type UserProfileSchemaId = UserProfileSchemaSelect["id"];
