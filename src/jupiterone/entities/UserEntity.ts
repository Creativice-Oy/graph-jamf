import { EntityFromIntegration } from "@jupiterone/jupiter-managed-integration-sdk";

export const USER_ENTITY_TYPE = "jamf_user";
export const USER_ENTITY_CLASS = "Person";

export interface UserEntity extends EntityFromIntegration {
  id: number;
  username: string;
  fullName?: string;
  email?: string;
  emailAddress?: string;
  phoneNumber?: string;
  position?: string;
  enableCustomPhotoUrl?: boolean;
  customPhotoUrl?: string;
  ldapServer?: string;
  computer?: string;
  peripheral?: string;
  mobileDevice?: string;
  vppAssignment?: string;
  totalVppCodeCount?: number;
}
