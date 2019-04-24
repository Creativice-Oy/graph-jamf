import {
  IntegrationInstanceAuthenticationError,
  IntegrationInstanceConfigError,
} from "@jupiterone/jupiter-managed-integration-sdk";
import invocationValidator from "./invocationValidator";

it("should reject", async () => {
  const executionContext = {
    instance: {
      config: {},
    },
  };
  try {
    await invocationValidator(executionContext as any);
  } catch (e) {
    expect(e instanceof IntegrationInstanceConfigError).toBe(true);
  }
});

it("auth error", async () => {
  const executionContext = {
    instance: {
      config: {
        jamfHost: "XXX",
        jamfUsername: "YYY",
        jamfPassword: "ZZZ",
      },
    },
  };
  try {
    await invocationValidator(executionContext as any);
  } catch (e) {
    expect(e instanceof IntegrationInstanceAuthenticationError).toBe(true);
  }
});
