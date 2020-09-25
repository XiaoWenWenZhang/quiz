package com.twuc.shopping.repository;

import com.twuc.shopping.dto.GoodsDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoodsRepository extends JpaRepository<GoodsDto, String> {
}
