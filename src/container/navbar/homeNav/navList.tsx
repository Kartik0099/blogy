import React from "react";
import Typography  from "@material-tailwind/react/components/Typography";

const list = [{name:"Our story",id:1,nav:'/'},{name:"Write",id:2,nav:'/'},{name:"sign in",id:3,nav:'/'}]

export const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {list.map((item) =><Typography
      key={item.name}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          {item.name}
        </a>
      </Typography>
      )}
      </ul>
  );