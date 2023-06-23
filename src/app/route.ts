import { redirect } from 'next/navigation'

export async function GET(resquest: Request) {
  redirect('/em-alta')
}
