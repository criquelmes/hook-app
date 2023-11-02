import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples/components";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote name={data.name} species={data.species} />
      )}

      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next Quote
      </button>
    </>
  );
};
