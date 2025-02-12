let data = [
  {
    "id": 1,
    "title": "Title 1",
    "content": "Content 1",
    "date": "1403-11-23"
  },
  {
    "id": 2,
    "title": "Title 2",
    "content": "Content 2",
    "date": "1403-11-23"
  },
  {
    "id": 3,
    "title": "Title 3",
    "content": "Content 3",
    "date": "1403-11-23"
  }
];

const toEn = num => {
  const id = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  }
  return num ? num.toString().replace(/[^0-9.]/g, function (w) {
    return id[w] || w
  }) : null
}
export async function GET(req) {
  return Response.json(data);
}


export async function POST(req) {
  const body = await req.json();

  const now = new Date();

  data.push({
    id: data.length + 1,
    title: body.title,
    content: body.content,
    date: toEn(now.toLocaleDateString('fa').replaceAll("/", "-")),
  });
  return Response.json(data);
}

export async function PUT(req) {
  const body = await req.json();

  let index = data.findIndex((item) => item.id === body.id);
  if (index >= 0) {
    data[index]['title'] = body.title;
    data[index]['content'] = body.content;

    return Response.json(data);
  } else {
    return Response.json({ "no data found": true });

  }
}
export async function DELETE(req) {
  const body = await req.json();

  data = data.filter((item) => item.id !== body.id);

  return Response.json(data);

}
