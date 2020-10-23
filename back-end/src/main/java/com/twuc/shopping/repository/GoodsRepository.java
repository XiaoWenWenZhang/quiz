package com.twuc.shopping.repository;

import com.twuc.shopping.bo.GoodsBO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoodsRepository extends JpaRepository<GoodsBO, String> {
}
