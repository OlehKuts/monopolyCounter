import React from "react";
import "./styles.css";
import { Text } from "./text";
import { Icon } from "./iconDocs/icon";

export const PropertyCard = ({ property, ...props }) => {
  return (
    <div className="propertyCard">
      <div
        className="title"
        style={{
          backgroundColor: property.color,
          fontWeight: "bold"
        }}
        {...props}
      >
        {property.name}
      </div>
      <div className="details">
        <Text size="0.8rem">Rent</Text>
        <Text size="0.8rem">{property.payments[1]}</Text>
      </div>
      <div className="details">
        <Text size="0.8rem">Rent with set</Text>
        <Text size="0.8rem">{property.payments[4]}</Text>
      </div>
      <div className="details">
        <Text size="0.8rem">
          Rent with 1 <Icon name="house" size="1rem" color="green" />
        </Text>
        <Text size="0.8rem">{property.payments[5]}</Text>
      </div>
      <div className="details">
        <Text size="0.8rem">
          Rent with 2 <Icon name="house" size="1rem" color="green" />
        </Text>
        <Text size="0.8rem">{property.payments[6]}</Text>
      </div>
      <div className="details">
        <Text size="0.8rem">
          Rent with 3 <Icon name="house" size="1rem" color="green" />
        </Text>
        <Text size="0.8rem">{property.payments[7]}</Text>
      </div>
      <div className="details">
        <Text size="0.8rem">
          Rent with 4 <Icon name="house" size="1rem" color="green" />
        </Text>
        <Text size="0.8rem">{property.payments[8]}</Text>
      </div>
      <div className="details">
        <Text size="0.8rem">
          Rent with <Icon name="hotel" size="0.8rem" color="red" />
        </Text>
        <Text size="0.8rem">{property.payments[9]}</Text>
      </div>
      <hr />
      <div className="details">
        <Text size="0.8rem">
          <Icon name="house" size="0.8rem" color="green" /> costs
        </Text>
        <Text size="0.8rem">{property.payments[10]}</Text>
      </div>
      <div className="details">
        <Text size="0.8rem">
          <Icon name="hotel" size="0.8rem" color="red" /> costs
        </Text>
        <Text size="0.8rem">{property.payments[14]}</Text>
      </div>
    </div>
  );
};
