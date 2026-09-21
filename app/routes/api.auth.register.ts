import type {Route} from './+types/api.auth.register';

export async function action({request}: Route.ActionArgs) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', {status: 405});
  }

  try {
    const data = (await request.json()) as Record<string, unknown>;
    const {firstName, lastName, phone, email, password, consent} = data;

    if (!firstName || !lastName || !email || !password || !phone) {
      return new Response(
        JSON.stringify({error: 'All fields are required'}),
        {status: 400, headers: {'Content-Type': 'application/json'}}
      );
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    if (!passwordRegex.test(String(password))) {
      return new Response(
        JSON.stringify({
          error: 'Password does not meet requirements',
        }),
        {status: 400, headers: {'Content-Type': 'application/json'}}
      );
    }

    // TODO: Implement your registration logic here
    // This is a placeholder that should be replaced with:
    // 1. Email existence check
    // 2. User creation in database
    // 3. Password hashing
    // 4. Session/JWT token generation
    // 5. Email verification flow (optional)

    // Example placeholder:
    // const existingUser = await getUserByEmail(email);
    // if (existingUser) {
    //   throw new Error('Email already registered');
    // }
    // const hashedPassword = await hashPassword(password);
    // const user = await createUser({
    //   firstName,
    //   lastName,
    //   email,
    //   password: hashedPassword,
    //   phone,
    //   consentMarketing: consent,
    // });
    // const session = await createSession(user.id);

    console.log('[AUTH] Registration attempt:', {
      email,
      firstName,
      lastName,
      consent,
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Account created successfully',
        // session: session.id,
        // TODO: Add actual session/token here
      }),
      {status: 201, headers: {'Content-Type': 'application/json'}}
    );
  } catch (error) {
    console.error('[AUTH] Registration error:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Registration failed',
      }),
      {status: 400, headers: {'Content-Type': 'application/json'}}
    );
  }
}
