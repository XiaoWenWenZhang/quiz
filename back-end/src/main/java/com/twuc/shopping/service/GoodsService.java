package com.twuc.shopping.service;

import com.twuc.shopping.domain.Goods;
import com.twuc.shopping.dto.GoodsDto;
import com.twuc.shopping.repository.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public class GoodsService {
    @Autowired
    GoodsRepository goodsRepository;

    public void addGoods(@RequestBody Goods goods){
        GoodsDto goodsDto = GoodsDto.builder().price(goods.getPrice()).unit(goods.getUnit()).url(goods.getUrl()).build();
        goodsRepository.save(goodsDto);
    }

    public ResponseEntity getGoodsList(){
        return ResponseEntity.ok(goodsRepository.findAll());
    }
}
