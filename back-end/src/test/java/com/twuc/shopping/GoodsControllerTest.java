package com.twuc.shopping;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.twuc.shopping.domain.Goods;
import com.twuc.shopping.repository.GoodsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class GoodsControllerTest {
    ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    MockMvc mockMvc;
    @Autowired
    GoodsRepository goodsRepository;

    @Test
    void should_add_goods_success() throws Exception {
        Goods goods = Goods.builder()
                .name("苹果")
                .price("20")
                .unit("yuan")
                .imgUrl("./apple.jpg")
                .build();
        String goodsString = objectMapper.writeValueAsString(goods);
        mockMvc.perform(post("/add").content(goodsString).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(get("/goodsList"))
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].name", is("苹果")))
                .andExpect(jsonPath("$[0].price", is("20")))
                .andExpect(jsonPath("$[0].unit", is("yuan")))
                .andExpect(status().isOk());
    }
}
