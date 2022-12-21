import { Routes, Route, useNavigate } from "react-router-dom";
import Page from "./page";

export default function App() {
	const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <form className="flex flex-col fixed top-0 left-0 bottom-0 right-0 justify-center items-center gap-5" onSubmit={(e) => {
						e.preventDefault();
						const name = e.target.name.value;
						const traits = e.target.traits.value;
						navigate('/' + name + '#' + traits);
					}}>
            <input
              type="text"
              name="name"
              className="rounded-xl border-dashed border-black border-4 inline-block w-96"
              placeholder="Name"
            />
            <input
              type="text"
              name="traits"
              className="rounded-xl border-dashed border-black border-4 inline-block w-96"
              placeholder="Noun traits seperated by a comma and a space (optional)"
            />
						<input type="submit" class="rounded-full p-4 bg-black text-white w-48" value="Go"/>
          </form>
        }
      />
      <Route path="/:name" element={<Page />} />
    </Routes>
  );
}
