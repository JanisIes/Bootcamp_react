import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import UserCard from "./index";

describe("testing UserCard", () => {
  const wrapper = shallow(<UserCard />);
  it("renders snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
