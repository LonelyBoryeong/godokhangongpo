// mocks/handlers.ts
import { http, HttpResponse } from "msw";
import volatilityData from "./data/volatilityData";

export const handlers = [
  http.get("/api/volatility", async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return HttpResponse.json({
      success: true,
      message: "요청에 성공했습니다.",
      results: volatilityData,
    });
  }),
  // 다른 핸들러들...
];
