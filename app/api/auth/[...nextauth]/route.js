import User from '@models/user'
import { connectToDB } from '@utils/database'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.id = token.id

      return session
    },

    async signIn({ profile }) {
      try {
        // CONNECT TO DB
        await connectToDB()

        // CHECK IF USER ALREADY EXISTS
        const userExists = await User.findOne({ email: profile.email })

        // IF NOT, CREATE NEW USER

        if (!userExists) {
          const newUser = await User.create({
            email: profile?.email,
            username: profile?.name.replace(' ', '')?.toLowerCase(),
            image:
              profile?.picture ||
              'https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=',
          })
        }
        return true()
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
})

export { handler as GET, handler as POST }
