export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { KengineSDK, VercelPlugin, BetterHttpInstrumentation } = await import('@khulnasoft/node-opentelemetry');

    const sdk = new KengineSDK({
      serverless: true,
      instrumentations: [
        new BetterHttpInstrumentation({ 
          plugins: [
            // Add the Vercel plugin to enable correlation between your logs and traces for projects deployed on Vercel
            new VercelPlugin()
          ]
        }),
      ]
    });

    sdk.start();
  }
}