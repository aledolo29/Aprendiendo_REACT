import "./App.css";
import Tooltip from "./tooltip/TooltipText";
function App() {
  return (
    <div className="App">
      <p>
        <Tooltip tooltip={"Texto generado"}>Lorem Ipsum</Tooltip> dolor sit,
        amet consectetur adipisicing elit. Quos, facilis vero cum ea sit quam
        aut id! Voluptatum, ipsam amet nostrum asperiores aperiam doloribus
        soluta dicta. Ad magnam voluptatum itaque. Assumenda a tenetur dolor ad
        incidunt nam nobis numquam, modi deleniti delectus illo eligendi,
        placeat quo fugiat, sed mollitia libero repellat recusandae corporis.
        Consequuntur, quia doloribus blanditiis voluptatibus earum sint. Aliquam
        nobis labore, non distinctio et culpa quas quia perspiciatis voluptatum
        eius, hic, suscipit alias reprehenderit ratione itaque ullam molestias
        adipisci magnam minima pariatur error. Esse, sapiente alias! Excepturi,
        eveniet. Exercitationem dolorem est quas earum temporibus nisi officiis
        voluptatem, praesentium similique nobis doloremque fuga dignissimos, ab
        at, odit incidunt! Amet porro quidem, eligendi quasi tempora cum rem
        officia dolores nemo. Ratione natus tempora veritatis maxime consectetur
        quis magni doloremque, consequuntur repellendus iure fugiat, ullam eum
        aliquid porro atque adipisci nulla quos! Eum error neque eius.
        <Tooltip tooltip={"Soy un tooltip"}>
          Vitae repellendus iste iusto quis?
        </Tooltip>
      </p>
    </div>
  );
}

export default App;
