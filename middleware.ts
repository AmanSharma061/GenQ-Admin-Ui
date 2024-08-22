import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


const protectedRoutes = ['/generate-qr']



export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = await getToken({ req: request });

    if (token == null && protectedRoutes.includes(pathname)) {
        const newUrl = new URL("http://localhost:4000/sign-in");
        return NextResponse.redirect(newUrl);
    }
    if (token !== null && protectedRoutes.includes(pathname)) {
        return NextResponse.next();
    }
}