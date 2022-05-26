import * as AWS from 'aws-sdk'
import crypto from 'crypto'
import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { SynthesizeSpeechInput } from 'aws-sdk/clients/polly'

const polly = new AWS.Polly({ region: process.env.AWS_POLLY_REGION })

export async function main(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
  const startAt = Date.now()

  const params: SynthesizeSpeechInput = {
    OutputFormat: 'mp3',
    SampleRate: '8000',
    LanguageCode: 'pt-BR',
    Engine: 'neural',
    Text: event.queryStringParameters.text,
    TextType: 'text',
    VoiceId: 'Vitoria',
  }

  const response = await polly.synthesizeSpeech(params).promise()

  const filename = `${crypto.randomUUID()}.mp3`
  const ms = (Date.now() - startAt) / 1000

  console.log(`Elapsed time ${ms}s`)

  return {
    statusCode: 200,
    isBase64Encoded: true,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment;filename=${filename}`,
    },
    body: response.AudioStream.toString('base64'),
  }
}
