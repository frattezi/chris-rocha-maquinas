import { useRouter } from "next/router";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function SearchInput() {
  const router = useRouter();

  const items = [
    {
      id: 0,
      name: "Cotton",
    },
    {
      id: 1,
      name: "Polyester",
    },
    {
      id: 2,
      name: "Dobby",
    },
    {
      id: 3,
      name: "Rayon",
    },
    {
      id: 4,
      name: "Spandex",
    },
  ];

  function onSelect(item) {
    router.push(`/search?query=${item.name}`);
  }

  return (
    <div style={{ width: "35rem", zIndex: "100" }}>
      <ReactSearchAutocomplete
        items={items}
        aria-label="Procure pelo nome da máquina"
        styling={{ clearIconMargin: "0px 14px 0 0" }}
        onSelect={onSelect}
      />
    </div>
  );
}
