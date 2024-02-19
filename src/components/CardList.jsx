import { Card } from "./Card";

export const CardList = ({ data }) => {

    return (
        <div className="p-10 flex flex-wrap justify-around gap-8">
            {
                // eslint-disable-next-line react/prop-types
                data.map((ele) => {
                    let index = ele.url.substr(34);
					index = index.slice(0,-1);
					console.log(index);
                    return <Card key={index} name={ele.name} url={ele.url} />;
                })
            }
        </div>
    );
};
