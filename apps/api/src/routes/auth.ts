import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  organizationName: z.string().min(2).optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function authRoutes(app: FastifyInstance) {
  // POST /auth/register
  app.post(
    '/register',
    async (req: FastifyRequest, reply: FastifyReply) => {
      const body = registerSchema.safeParse(req.body);
      if (!body.success) {
        return reply.status(400).send({
          error: 'Validation failed',
          issues: body.error.issues,
        });
      }

      // TODO: hash password with bcrypt, save user + org to DB via Prisma
      // const hash = await bcrypt.hash(body.data.password, 10);
      // const user = await prisma.user.create({ data: { ... } });

      return reply.status(201).send({
        message: 'User registered successfully',
        user: {
          name: body.data.name,
          email: body.data.email,
        },
      });
    }
  );

  // POST /auth/login
  app.post(
    '/login',
    async (req: FastifyRequest, reply: FastifyReply) => {
      const body = loginSchema.safeParse(req.body);
      if (!body.success) {
        return reply.status(400).send({
          error: 'Validation failed',
          issues: body.error.issues,
        });
      }

      // TODO: lookup user, verify password, sign JWT
      // const user = await prisma.user.findUnique({ where: { email: body.data.email } });
      // const valid = await bcrypt.compare(body.data.password, user.passwordHash);
      // const token = app.jwt.sign({ userId: user.id, role: user.role });

      return reply.status(200).send({
        message: 'Login successful',
        token: 'placeholder-jwt-token',
      });
    }
  );

  // GET /auth/me
  app.get(
    '/me',
    async (req: FastifyRequest, reply: FastifyReply) => {
      // TODO: verify JWT, return current user from DB
      return reply.status(200).send({
        message: 'Auth check endpoint',
        user: null,
      });
    }
  );
}
