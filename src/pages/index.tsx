import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Home() {
  const { data } = api.posts.getAll.useQuery();
  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div>
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}

          <div>
            {data?.map((post) => (
              <div key={post.id}> {post.content} </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
