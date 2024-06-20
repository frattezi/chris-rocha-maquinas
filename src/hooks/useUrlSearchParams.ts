import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";

const searchParamsSchema = z.object({
  name: z.string().max(4).optional(),
});

function useUrlSearchParams() {
  const [searchParams, setSearchParams] = useState<Record<string, string>>({});
  const urlParams = useSearchParams();

  useEffect(() => {
    const params: Record<string, string> = {};
    urlParams.forEach((value, key) => {
      params[key] = value;
    });

    // Validate the parameters using the Zod schema
    const validationResult = searchParamsSchema.safeParse(params);
    if (validationResult.success) {
      setSearchParams(validationResult.data);
    } else {
      console.error("Invalid URL parameters:", validationResult.error);
      setSearchParams({});
    }
  }, [urlParams]);

  return { searchParams };
}

export default useUrlSearchParams;
