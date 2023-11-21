const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`)
  return res.json();
}


interface Params {
  params: {name: string}
}

export default function Page({ params }: Params) {
    return (
      <div>
        {params.name}
      </div>
    )
  }
  