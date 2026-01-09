/**
 * Checks if the request is coming from the same origin as the server
 * @param req - NextRequest object
 * @returns boolean indicating if the request is from same origin
 */
export function isSameOrigin(req: Request): boolean {
  const originHeader = req.headers.get('origin');
  const refererHeader = req.headers.get('referer');

  // Get the host from the request URL
  const url = new URL(req.url);
  const host = url.host;
  const protocol = url.protocol;

  // Construct the expected origin
  const expectedOrigin = `${protocol}//${host}`;

  // Check if origin header matches expected origin
  if (originHeader) {
    return originHeader === expectedOrigin;
  }

  // Fallback to checking referer header if origin header is not present
  if (refererHeader) {
    try {
      const refererUrl = new URL(refererHeader);
      const refererOrigin = `${refererUrl.protocol}//${refererUrl.host}`;
      return refererOrigin === expectedOrigin;
    } catch {
      // If referer URL parsing fails, fall back to other checks
      return false;
    }
  }

  // For server-side requests (e.g., during SSR), there might be no origin/referer
  // In such cases, we might want to allow the request based on other factors
  return true; // Default to allowing server-side requests
}

/**
 * Alternative method: Check using host header
 * @param req - NextRequest object
 * @returns boolean indicating if the request is from same origin
 */
export function isSameOriginByHost(req: Request): boolean {
  const originHeader = req.headers.get('origin');
  const hostHeader = req.headers.get('host');
  const xForwardedHost = req.headers.get('x-forwarded-host');

  // Get the actual host to compare against
  const actualHost = xForwardedHost || hostHeader;

  if (!actualHost || !originHeader) {
    return false;
  }

  // Check if origin ends with the same host
  try {
    const originUrl = new URL(originHeader);
    return originUrl.host === actualHost;
  } catch {
    return false;
  }
}