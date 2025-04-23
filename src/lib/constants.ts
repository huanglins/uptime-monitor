import * as HttpStatusPhrases from "stoker/http-status-phrases"
import { createMessageObjectSchema } from "stoker/openapi/schemas"
import { z } from "zod"

export const PRE_FQDN = "UPDATE_ME_PRE_FQDN"
export const PROD_FQDN = "uptime.vincents.cn"

export const ZOD_ERROR_MESSAGES = {
  REQUIRED: "Required",
  EXPECTED_NUMBER: "Expected number, received nan",
  NO_UPDATES: "No updates provided",
}

export const ZOD_ERROR_CODES = {
  INVALID_UPDATES: "invalid_updates",
}

export const NotFoundSchema = createMessageObjectSchema(
  HttpStatusPhrases.NOT_FOUND,
)

export const ErrorResponseSchema = z.object({
  error: z.string(),
})
