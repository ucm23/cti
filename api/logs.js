import Fetcher from "./Fetcher";
import { getHeaders } from "./extras";

export const insertLogs = async ({ data }) => {
    try {
        let headers = getHeaders({})
        await Fetcher({
            method: 'POST',
            url: `/logs`,
            headers,
            data,
        });
    } catch (error) {
        console.log("🚀 ~ insertLogs ~ error:", error)
    }
}