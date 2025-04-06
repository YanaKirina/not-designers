import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error || 'Ошибка при выполнении запроса' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Ошибка при выполнении GraphQL запроса:', error);
    return NextResponse.json(
      { error: 'Ошибка при выполнении запроса: ' + (error instanceof Error ? error.message : 'Неизвестная ошибка') },
      { status: 500 }
    );
  }
} 