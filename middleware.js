import { withAuth } from "next-auth/middleware";

export default withAuth({
  authorized({ req, token }) {
    
  },
});
export const config = { matcher: ["/dashboar"] };
