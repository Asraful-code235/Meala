import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const providers = [
  {
    name: 'github',
  },

  {
    name: 'google',
  },
];

const SignInPage = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  if (session) {
    setTimeout(() => {
      push('/');
    }, 2000);
    return (
      <div>
        <h1>You are already signed In</h1>
      </div>
    );
  }
  const handleOAuthSignIn = (provider) => () => {
    signIn(provider);
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="p-20 border shadow flex flex-col gap-4 ">
        {providers.map(({ name }) => (
          <button
            className="capitalize border font-semibold px-16 py-4 shadow rounded-md hover:drop-shadow-md"
            onClick={handleOAuthSignIn(name)}
            key={name}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SignInPage;
