import { Account } from "../../jamf";
import {
  ACCOUNT_ENTITY_CLASS,
  ACCOUNT_ENTITY_TYPE,
  AccountEntity,
} from "../../jupiterone";

import { generateEntityKey } from "../../utils/generateKey";

export function createAccountEntity(account: Account): AccountEntity {
  return {
    _class: ACCOUNT_ENTITY_CLASS,
    _key: generateEntityKey(ACCOUNT_ENTITY_TYPE, account.id),
    _type: ACCOUNT_ENTITY_TYPE,
    _scope: ACCOUNT_ENTITY_TYPE,
    displayName: account.name,
    name: account.name,
  };
}
