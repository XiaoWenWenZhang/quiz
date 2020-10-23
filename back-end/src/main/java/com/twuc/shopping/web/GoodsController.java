package com.twuc.shopping.web;

import com.twuc.shopping.domain.Goods;
import com.twuc.shopping.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoodsController {
    @Autowired
    GoodsService goodsService;

    @PostMapping("/add")
    public ResponseEntity addGoods(@RequestBody Goods goods){
        goodsService.addGoods(goods);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/goodsList")
    public ResponseEntity getGoodsList(){
        return goodsService.getGoodsList();
    }

}
