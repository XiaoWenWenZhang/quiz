package com.twuc.shopping.bo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GoodsBO {
    @Id
    @GeneratedValue(generator = "user_id")
    @Column(columnDefinition = "VARCHAR(36)")
    private String id;

    @NotNull
    private String price;

    @NotNull
    private String unit;

    @NotNull
    private String url;
}
