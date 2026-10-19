export async function readApiJson(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") ?? "unknown content type";
  const body = await response.text();

  try {
    return JSON.parse(body) as unknown;
  } catch {
    const responseType = /(?:application\/json|[\w.-]+\+json)/i.test(contentType)
      ? "invalid JSON"
      : "a non-JSON response";
    throw new Error(
      `The API returned ${responseType} (HTTP ${response.status}; ${contentType}). Check the Vercel API route and function logs.`,
    );
  }
}

export function getApiStatus(payload: unknown): string | undefined {
  if (
    typeof payload === "object" &&
    payload !== null &&
    "status" in payload &&
    typeof payload.status === "string"
  ) {
    return payload.status;
  }
  return undefined;
}
