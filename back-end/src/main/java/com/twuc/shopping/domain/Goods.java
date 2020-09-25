package com.twuc.shopping.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Goods {
    private String price;
    private String unit;
    private String url;

}
